const path = require('path');
const fs = require('fs');
const {baseDir} = require('../src/baseDir');

describe('createFiles', () => {
  /**
   * Mock fs so the test will not actually create and write to files and suppress console statements.
   */
  beforeEach(() => {
    jest.spyOn(fs, 'existsSync').mockImplementation(() => true);

    [
      jest.spyOn(console, 'log'),
      jest.spyOn(fs, 'writeFileSync'),
    ].forEach((spy) => {
      spy.mockImplementation(jest.fn());
    });
  });

  test('Script runs without errors', async() => {
    expect.assertions(1);
    const promise = import('../src/createFiles');

    await expect(promise).resolves.toBeTruthy();
  });

  test('No absolute paths are used in the configs', async() => {
    expect.assertions(1);
    const baseFile = (await import(path.resolve(baseDir, 'preset-default.js'))).default;

    expect(baseFile.extends.every((item) => item.startsWith('/'))).toBe(true);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
