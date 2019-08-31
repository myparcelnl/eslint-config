module.exports = {
  parserOptions: {
    ecmaVersion: 5,
  },
  plugins: [
    'es5',
  ],
  extends: [
    './preset-default.js',
    'plugin:es5/no-es2015',
  ],
};
