module.exports = {
  env: {
    node: true,
    meteor: true,
    jquery: true
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  extends: [
    './.eslintrc.es6.js',
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
