const {resolveConfiguration} = require('../src/resolveConfiguration');

describe('Resolves configurations correctly', () => {
  it.each`
    category    | file                        | extend
    ${'plugin'} | ${'jest'}                   | ${'@myparcel/eslint-config/plugin-jest'}
    ${'plugin'} | ${'meteor'}                 | ${'@myparcel/eslint-config/plugin-meteor'}
    ${'plugin'} | ${'you-dont-need-momentjs'} | ${'@myparcel/eslint-config/plugin-you-dont-need-momentjs'}
    ${'preset'} | ${'default'}                | ${'@myparcel/eslint-config/preset-default'}
    ${'preset'} | ${'es6'}                    | ${'@myparcel/eslint-config/preset-es6'}
    ${'preset'} | ${'vue'}                    | ${'@myparcel/eslint-config/preset-vue'}
  `('Resolves $file to $extend', ({category, file, extend}) => {
  expect(resolveConfiguration(category, file)).toEqual(extend);
});
});
