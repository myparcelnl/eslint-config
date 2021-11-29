const path = require('path');
const {baseDir} = require('../src/baseDir');

describe('createFiles', () => {
  test.todo('Script runs without errors', /* , async() => {
    /!**
     * Mock fs so the test will not actually create and write to files and suppress console statements.
     *!/
    jest.spyOn(fs, 'existsSync').mockImplementation(() => true);
    [
      jest.spyOn(console, 'log'),
      jest.spyOn(fs, 'writeFileSync'),
    ].forEach((spy) => {
      spy.mockImplementation(jest.fn());
    });

    expect.assertions(1);
    const promise = import('../src/createFiles');

    await expect(promise).resolves.toBeTruthy();

    jest.resetAllMocks();
    jest.restoreAllMocks();
  } */);

  test('No absolute paths are used in the configs', async() => {
    expect.assertions(1);
    const baseFile = (await import(path.resolve(baseDir, 'preset-default.js'))).default;

    expect(baseFile.extends.every((item) => !item.startsWith('/'))).toBe(true);
  });
});
