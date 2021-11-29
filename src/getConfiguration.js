const {baseDir} = require('./baseDir');

/**
 * Get the path to a configuration based on the current environment.
 *
 * @param {string} type
 * @param {string} name
 * @returns {string}
 */
function get(type, name) {
  if (process.env.NODE_ENV === 'test') {
    return `${baseDir}/src/configurations/${type}s/${name}.js`;
  }

  return `./${type}-${name}.js`;
}

/**
 * @param {string} name
 * @returns {string}
 */
function getPreset(name) {
  return get('preset', name);
}

/**
 * @param {string} name
 * @returns {string}
 */
function getPlugin(name) {
  return get('plugin', name);
}

module.exports = {
  getPreset,
  getPlugin,
};
