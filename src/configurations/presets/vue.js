const {getPreset, getPartial} = require('../../getConfiguration');

module.exports = {
  'extends': [
    getPreset('es6'),
    getPartial('vue'),
  ],
};
