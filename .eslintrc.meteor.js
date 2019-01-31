module.exports = {
  env: {
    browser: true,
    node: true,
    meteor: true,
    es6: true,
    jquery: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: [
    './.eslintrc.js',
    'eslint:recommended',
    'plugin:meteor/recommended'
  ],
  plugins: [
    'meteor'
  ],
  globals: {
    ReactiveVar: false,
    TemplateController: false,
    Tracker: false,
    FlowRouter: false
  }
};
