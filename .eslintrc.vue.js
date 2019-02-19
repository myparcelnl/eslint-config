module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    './.eslintrc.es6.js',
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
