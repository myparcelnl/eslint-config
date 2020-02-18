const fs = require('fs');

/**
 * @param {String} source - Source directory.
 *
 * @returns {Array}
 */
function getDirectories(source) {
  return fs.readdirSync(source, {withFileTypes: true})
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name);
}

module.exports = {getDirectories};
