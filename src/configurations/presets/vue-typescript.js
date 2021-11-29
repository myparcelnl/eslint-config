const {getPartial, getPreset} = require('../../getConfiguration');

module.exports = {
  'extends': [
    getPreset('typescript'),
    getPartial('vue'),
  ],
  'parserOptions': {
    'parser'             : '@typescript-eslint/parser',
    'project'            : 'tsconfig.json',
    'extraFileExtensions': [
      '.vue',
    ],
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'rules': {
    'vue/block-lang': 'off',
  },
};
