const {getPreset, getPartial} = require('../../getConfiguration');

/**
 * Using this config requires you to have a tsconfig.json in your project.
 */
module.exports = {
  'parser' : '@typescript-eslint/parser',
  'extends': [
    getPreset('es6'),
    getPartial('typescript'),
  ],
};
