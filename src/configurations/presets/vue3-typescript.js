const vue3Config = require('./vue3');
const vueTypescriptConfig = require('./vue-typescript');

module.exports = {
  ...vue3Config,
  ...vueTypescriptConfig,

  'rules': {
    ...vue3Config.rules,
    ...vueTypescriptConfig.rules,
    'vue/require-direct-export': 'off',
    'vue/valid-template-root'  : 'off',
  },
};
