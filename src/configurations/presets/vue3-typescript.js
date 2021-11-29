const {getPreset, getPartial} = require('../../getConfiguration');

module.exports = {
  'extends': [
    getPreset('vue3'),
    getPartial('typescript'),
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
    'vue/require-direct-export': 'off',
    'vue/valid-template-root'  : 'off',
  },
};
