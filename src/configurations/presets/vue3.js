const vueConfig = require('./vue');
const {getPreset} = require('../../getConfiguration');

module.exports = {
  ...vueConfig,
  'extends': [
    getPreset('es6'),
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
  ],
};
