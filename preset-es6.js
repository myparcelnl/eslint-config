module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    es6: true,
  },
  extends: [
    './preset-default.js',
    './plugin-babel.js',
  ],
  rules: {
    'func-names': ['warn', 'as-needed'],
    'no-magic-numbers': ['warn', {
      ignore: [-1, 0, 1, 100],
      detectObjects: true,
      enforceConst: true,
    }],

    // ES6 only
    'arrow-body-style': 'off',
    'arrow-parens': 'warn',
    'arrow-spacing': ['warn', {'before': true, 'after': true}],
    'constructor-super': 'off',
    'generator-star-spacing': 'off',
    'no-class-assign': 'off',
    'no-confusing-arrow': 'warn',
    'no-const-assign': 'warn',
    'no-dupe-class-members': 'warn',
    'no-duplicate-imports': 'warn',
    'no-new-symbol': 'off',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'off',
    'no-useless-computed-key': 'off',
    'no-useless-constructor': 'off',
    'no-useless-rename': 'warn',
    'no-var': 'warn',
    'object-shorthand': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'warn',
    'prefer-destructuring': ['warn', {'array': false, 'object': true}],
    'prefer-numeric-literals': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'require-yield': 'off',
    'rest-spread-spacing': 'off',
    'sort-imports': 'warn',
    'symbol-description': 'off',
    'template-curly-spacing': 'warn',
    'yield-star-spacing': 'off',
  },
};
