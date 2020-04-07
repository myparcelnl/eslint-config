const fs = require('fs');

describe('createFiles', () => {
  /**
   * Mock fs so the test will not actually create and write to files and suppress console statements.
   */
  beforeAll(() => {
    jest.spyOn(fs, 'existsSync').mockImplementationOnce(() => true);
    [
      jest.spyOn(console, 'log'),
      jest.spyOn(fs, 'writeFileSync'),
    ].forEach((spy) => {
      spy.mockImplementationOnce(jest.fn());
    });
  });

  test('Script runs without errors', async() => {
    expect.assertions(1);

    const promise = import('../src/createFiles');

    await expect(promise).resolves.toBeTruthy();
  });
});
