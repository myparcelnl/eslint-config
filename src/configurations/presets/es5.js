const {getPreset} = require('../../getConfiguration');

module.exports = {
  'parserOptions': {
    'ecmaVersion': 5,
  },
  'extends': [
    getPreset('default'),
  ],
};
