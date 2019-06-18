module.exports = {
  parserOptions: {
    ecmaVersion: 5,
  },
  plugins: [
    'es5',
  ],
  extends: [
    './eslint.config.js',
    'plugin:es5/no-es2015',
  ],
};
