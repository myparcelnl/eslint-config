const {getPreset} = require('../../getConfiguration');

module.exports = {
  'extends': [
    getPreset('vue'),
    'plugin:vue/vue3-recommended',
  ],
  'rules': {
    'vue/block-lang': [
      'warn',
      {
        'script': {
          'lang': 'ts',
        },
      },
    ],
    'vue/multi-word-component-names'    : 'off',
    'vue/no-multiple-template-root'     : 'off',
    'vue/no-v-for-template-key'         : 'off',
    'vue/no-v-for-template-key-on-child': 'warn',
    'vue/require-slots-as-functions'    : 'error',
    'vue/v-on-event-hyphenation'        : [
      'warn',
      'never',
      {
        'autofix': true,
      },
    ],
  },
};
