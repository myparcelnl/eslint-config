const {name: packageName} = require('../package');

/**
 * @param {string} category
 * @param {string} name
 *
 * @returns {string}
 */
function resolveConfiguration(category, name) {
  return `${packageName}/${category}-${name}`;
}

module.exports = {resolveConfiguration};
