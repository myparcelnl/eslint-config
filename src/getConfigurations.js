const {getDirectories} = require('./getDirectories');
const fs = require('fs');
const path = require('path');
const {resolveConfiguration} = require('./resolveConfiguration');

/**
 * Get the JSDoc configurations in a folder.
 *
 * @returns {Object[]}
 */
function getConfigurations() {
  const allowedDirs = ['presets', 'plugins'];
  const realBaseDir = path.resolve(`${__dirname}/configurations`);
  const paths = [];

  const directories = getDirectories(realBaseDir).filter((dir) => allowedDirs.includes(dir));

  directories.forEach((folder) => {
    const path = `${realBaseDir}/${folder}`;

    // Remove trailing "s".
    const categoryName = folder.replace(/s$/, '');

    const files = fs.readdirSync(path);

    files.forEach((fileName) => {
      paths.push({
        extend: resolveConfiguration(categoryName, fileName.replace(/\.\w+$/, '')),
        realFileName: `${realBaseDir}/${folder}/${fileName}`,
        fileName: `${categoryName}-${fileName}`,
      });
    });
  });

  return paths;
}

module.exports = {getConfigurations};
