const fs = require('fs');
const path = require('path');
const {getConfigurations} = require('./getConfigurations');

const baseTemplate = fs.readFileSync(path.resolve(__dirname, 'config.template.js'));

getConfigurations().forEach(({extend, fileName, realFileName}) => {
  // eslint-disable-next-line max-len
  const fileHeader = `/*\n * This is a generated file. Use it by replacing the below string\n * value with '${extend}'\n*/\n`;
  const template = baseTemplate.toString().replace(
    '__FILE_PATH__',
    realFileName,
  );

  const newFile = path.resolve(__dirname, `../${fileName}`);
  fs.closeSync(fs.openSync(newFile, 'w'));
  fs.writeFileSync(newFile, fileHeader + template);
});
