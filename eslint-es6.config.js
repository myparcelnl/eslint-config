const {defaultParserOptions} = require('./exports');

module.exports = {
  ...defaultParserOptions,
  env: {
    es6: true,
  },
  extends: [
    './eslint.config.js',
    './eslint-babel.config.js',
  ],
  rules: {
    'arrow-parens': 'warn',
    'arrow-spacing': ['warn', {'before': true, 'after': true}],
    'no-confusing-arrow': 'warn',
    'no-const-assign': 'warn',
    'no-dupe-class-members': 'warn',
    'no-duplicate-imports': 'warn',
    'no-useless-rename': 'warn',
    'no-var': 'warn',
    'prefer-const': 'warn',
    'prefer-destructuring': ['warn', {'array': false, 'object': true}],
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'sort-imports': 'warn',
    'template-curly-spacing': 'warn',
  },
};
