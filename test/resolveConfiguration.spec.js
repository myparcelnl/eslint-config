const {resolveConfiguration} = require('../src/resolveConfiguration');
const {name: packageName} = require('../package');

describe('Resolves configurations correctly', () => {
  it.each`
    category    | file                        | extend
    ${'plugin'} | ${'jest'}                   | ${`${packageName}/plugin-jest`}
    ${'plugin'} | ${'meteor'}                 | ${`${packageName}/plugin-meteor`}
    ${'plugin'} | ${'you-dont-need-momentjs'} | ${`${packageName}/plugin-you-dont-need-momentjs`}
    ${'preset'} | ${'default'}                | ${`${packageName}/preset-default`}
    ${'preset'} | ${'es6'}                    | ${`${packageName}/preset-es6`}
    ${'preset'} | ${'vue'}                    | ${`${packageName}/preset-vue`}
  `('Resolves $file to $extend', ({category, file, extend}) => {
    expect(resolveConfiguration(category, file)).toEqual(extend);
  });
});
