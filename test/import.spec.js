const path = require('path');
const {getConfigurations} = require('../src/getConfigurations');

describe('All files can be imported', () => {
  const files = getConfigurations().map((obj) => obj.realFileName);

  it.each(files)('/%s can be loaded', (file) => {
    expect(() => require(path.resolve(__dirname, '../', file))).not.toThrow();
  });
});
