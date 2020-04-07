const path = require('path');
const {baseDir} = require('./baseDir');

/**
 * @param {String} type
 * @param {String} name
 * @returns {String}
 */
function get(type, name) {
  if (process.env.NODE_ENV === 'test') {
    return path.resolve(baseDir, 'src', 'configurations', `${type}s`, `${name}.js`);
  }

  return `./${type}-${name}.js`;
}

/**
 * @param {String} name
 * @returns {String}
 */
function getPreset(name) {
  return get('preset', name);
}

/**
 * @param {String} name
 * @returns {String}
 */
function getPlugin(name) {
  return get('plugin', name);
}

module.exports = {
  getPreset,
  getPlugin,
};
