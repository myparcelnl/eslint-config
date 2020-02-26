const packageName = require('../package').name;

/**
 * @param {String} category
 * @param {String} name
 *
 * @returns {String}
 */
function resolveConfiguration(category, name) {
  return `${packageName}/${category}-${name}`;
}

module.exports = {resolveConfiguration};
