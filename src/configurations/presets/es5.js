const {getPreset} = require('../../../private/getConfiguration');

module.exports = {
  'parserOptions': {
    'ecmaVersion': 5,
  },
  'extends': [
    getPreset('default'),
  ],
};
