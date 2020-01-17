const {getDirectories} = require('./getDirectories');
const fs = require('fs');
const path = require('path');

/**
 * Get the JSDoc configurations in a folder.
 *
 * @returns {Array.<Object>}
 */
function getConfigurations() {
  const baseDir = './src/configurations';
  const realBaseDir = path.resolve(`${__dirname}/configurations`);
  const paths = [];

  getDirectories(realBaseDir).forEach((folder) => {
    const path = `${realBaseDir}/${folder}`;
    const categoryName = folder.substr(0, folder.length - 1);

    const files = fs.readdirSync(path);

    files.forEach((fileName) => {
      const packageName = require('../package').name;

      paths.push({
        extend: `${`${packageName}/${categoryName}-${fileName.replace(
          /\.\w+$/,
          '',
        )}`}`,
        realFileName: `${baseDir}/${folder}/${fileName}`,
        fileName: `${categoryName}-${fileName}`,
      });
    });
  });

  return paths;
}

module.exports = {getConfigurations};
