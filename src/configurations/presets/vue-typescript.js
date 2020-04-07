const vueConfig = require('./vue');
const typeScriptConfig = require('./typescript');

module.exports = {
  ...typeScriptConfig,
  ...vueConfig,
  'parser': null,

  'parserOptions': {
    ...vueConfig.parserOptions,
    ...typeScriptConfig.parserOptions,
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion'        : 11,
    'extraFileExtensions': [
      '.vue',
    ],
    'parser'    : '@typescript-eslint/parser',
    'sourceType': 'module',
  },

  'plugins': [
    ...vueConfig.plugins,
    ...typeScriptConfig.plugins,
  ],

  'rules': {
    ...vueConfig.rules,
    ...typeScriptConfig.rules,
  },
};
