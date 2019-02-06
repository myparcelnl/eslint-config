module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    './.eslintrc.js',
    'plugin:vue/recommended'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'generator-star-spacing': 'off',
    'id-length': ['warn', {'exceptions': ['i', 'h']}],
    'no-else-return': 'error',
    'no-extra-parens': ['error', 'all', {'nestedBinaryExpressions': false}],
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': ['error', 'before'],
    'vue/html-closing-bracket-newline': ['error', {'singleline': 'never', 'multiline': 'never'}],
    'vue/multiline-html-element-content-newline': 'error'
  }
};
