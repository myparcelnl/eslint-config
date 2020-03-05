const fs = require('fs');
const path = require('path');
const {getConfigurations} = require('./getConfigurations');

const baseTemplate = fs.readFileSync(path.resolve(__dirname, 'configurations/config.template.js'));

getConfigurations().forEach(({extend, fileName, realFileName}) => {
  const replace = (data, marker, value) => {
    return data.replace(new RegExp(marker, 'g'), value);
  };

  let template = replace(baseTemplate.toString(), '__FILE_PATH__', realFileName);
  template = replace(template, '__EXTENDS__', extend);

  const newFile = path.resolve(__dirname, `../${fileName}`);

  fs.closeSync(fs.openSync(newFile, 'w'));
  fs.writeFileSync(newFile, template);
});
