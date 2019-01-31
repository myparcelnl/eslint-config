module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    './.eslintrc.js',
    'plugin:vue/recommended',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'array-bracket-newline': [ 'error', 'consistent' ],
    'array-element-newline': [ 'error', 'consistent' ],
    'arrow-parens': 'error',
    'brace-style': [
      'error', '1tbs', {
        'allowSingleLine': false
      }
    ],
    'curly': 'error',
    'generator-star-spacing': 'off',
    'no-console': 'error',
    'no-else-return': 'error',
    'no-extra-parens': [
      'error', 'all', {
        'nestedBinaryExpressions': false
      }
    ],
    'max-len': ['warn', {'code': 120}],
    'no-lonely-if': 'error',
    'no-var': 'error',
    'object-curly-newline': [
      'error', {
        'ObjectExpression': {
          'multiline': true, 'consistent': true
        },
        'ObjectPattern': {
          'consistent': true
        },
        'ImportDeclaration': {
          'consistent': true
        },
        'ExportDeclaration': {
          'multiline': true, 'minProperties': 4, 'consistent': true
        }
      }
    ],
    'object-curly-spacing': [
      'error', 'always'
    ],
    'operator-linebreak': [
      'error', 'before'
    ],
    'require-await': 'error',
    'vue/html-closing-bracket-newline': [
      'error', {
        'singleline': 'never', 'multiline': 'never'
      }
    ],
    'vue/multiline-html-element-content-newline': 'error',
    'wrap-regex': 'error'
  }
};
