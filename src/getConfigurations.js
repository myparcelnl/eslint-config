const {getDirectories} = require('./getDirectories');
const fs = require('fs');
const path = require('path');
const {resolveConfiguration} = require('./resolveConfiguration');

/**
 * Get the JSDoc configurations in a folder.
 *
 * @returns {Array.<Object>}
 */
function getConfigurations() {
  const allowedDirs = ['presets', 'plugins'];
  const baseDir = './src/configurations';
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
        realFileName: `${baseDir}/${folder}/${fileName}`,
        fileName: `${categoryName}-${fileName}`,
      });
    });
  });

  return paths;
}

module.exports = {getConfigurations};
