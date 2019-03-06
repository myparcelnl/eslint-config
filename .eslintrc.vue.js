module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    './.eslintrc.es6.js',
    'plugin:vue/recommended',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'generator-star-spacing': 'off',
    'id-length': ['warn', {'exceptions': ['i', 'h']}],
    'no-else-return': 'warn',
    'no-extra-parens': ['warn', 'all', {'nestedBinaryExpressions': false}],
    'object-curly-spacing': ['warn', 'always'],
    'operator-linebreak': ['warn', 'before'],
    'vue/html-closing-bracket-newline': ['warn', {'singleline': 'never', 'multiline': 'never'}],
    'vue/multiline-html-element-content-newline': 'warn',
  },
};
